SELECT 
  `deck`.*, 
  `favoriteDecks`.`created_at` AS `favoriteDecks.createdAt`, 
  `favoriteDecks`.`updated_at` AS `favoriteDecks.updatedAt`, 
  `favoriteDecks`.`user_id` AS `favoriteDecks.userId`, 
  `favoriteDecks`.`deck_id` AS `favoriteDecks.deckId` 

FROM (

  SELECT 
    `deck`.`id`, 
    `deck`.`title`, 
    `deck`.`is_public` AS `isPublic`, 
    `favorite_deck`.`user_id` AS `today` 
  FROM `deck` AS `deck` 
  WHERE ( 

    SELECT `deck_id` 
    FROM `favorite_deck` AS `favoriteDecks` 
    WHERE
      (`favoriteDecks`.`user_id` = 4 AND `favoriteDecks`.`deck_id` = `deck`.`id`) 
    LIMIT 1 

  ) IS NOT NULL
  
  ORDER BY `deck`.`id` DESC 
  LIMIT 0, 4

) AS `deck` 

INNER JOIN 
  `favorite_deck` AS `favoriteDecks` 
  ON `deck`.`id` = `favoriteDecks`.`deck_id` AND `favoriteDecks`.`user_id` = 4 

ORDER BY `deck`.`id` DESC;



SELECT 
  `deck`.*, 
  `favoriteDecks`.`created_at` AS `favoriteDecks.createdAt`, 
  `favoriteDecks`.`updated_at` AS `favoriteDecks.updatedAt`, 
  `favoriteDecks`.`user_id` AS `favoriteDecks.userId`, 
  `favoriteDecks`.`deck_id` AS `favoriteDecks.deckId` 
FROM (
  SELECT 
    `deck`.`id`, 
    `deck`.`title`, 
    `deck`.`is_public` AS `isPublic`, 
    `favorite_deck`.`user_id` AS `today` 
  FROM `deck` AS `deck` 
  ORDER BY `deck`.`id` DESC 
  LIMIT 0, 4
) AS `deck` 

LEFT OUTER JOIN `favorite_deck` AS `favoriteDecks` 
ON `deck`.`id` = `favoriteDecks`.`deck_id` 

ORDER BY `deck`.`id` DESC;






SELECT 
  `deck`.*, 
  `favoriteDecks`.`created_at` AS `favoriteDecks.createdAt`, 
  `favoriteDecks`.`updated_at` AS `favoriteDecks.updatedAt`, 
  `favoriteDecks`.`user_id` AS `favoriteDecks.userId`, 
  `favoriteDecks`.`deck_id` AS `favoriteDecks.deckId` 
FROM (

  SELECT 
    `deck`.`id`, 
    `deck`.`title`, 
    `deck`.`is_public` AS `isPublic`, 
    `favorite_deck`.`user_id` AS `today` 
  FROM `deck` AS `deck` 
  WHERE ( 

    SELECT `deck_id` 
    FROM `favorite_deck` AS `favoriteDecks` 
    WHERE (
      `favoriteDecks`.`user_id` = 4 AND `favoriteDecks`.`deck_id` = `deck`.`id`
    ) LIMIT 1 

  ) IS NOT NULL 
  ORDER BY `deck`.`id` DESC 
  LIMIT 0, 4

) AS `deck` 

INNER JOIN `favorite_deck` AS `favoriteDecks` 
ON `deck`.`id` = `favoriteDecks`.`deck_id` AND `favoriteDecks`.`user_id` = 4 

ORDER BY `deck`.`id` DESC;






SELECT `deck`.*,
       `favoriteDecks`.`created_at` AS `favoriteDecks.createdAt`,
       `favoriteDecks`.`updated_at` AS `favoriteDecks.updatedAt`,
       `favoriteDecks`.`user_id`    AS `favoriteDecks.userId`,
       `favoriteDecks`.`deck_id`    AS `favoriteDecks.deckId`
FROM   (SELECT `deck`.`id`,
               `deck`.`title`,
               `deck`.`is_public`    AS `isPublic`,
               favoritedecks.user_id AS `오늘`
        FROM   `deck` AS `deck`
        WHERE  (SELECT `deck_id`
                FROM   `favorite_deck` AS `favoriteDecks`
                WHERE  ( `favoriteDecks`.`user_id` = 4
                         AND `favoriteDecks`.`deck_id` = `deck`.`id` )
                LIMIT  1) IS NOT NULL
        GROUP  BY `id`
        ORDER  BY `deck`.`id` DESC
        LIMIT  0, 4) AS `deck`
       INNER JOIN `favorite_deck` AS `favoriteDecks`
               ON `deck`.`id` = `favoriteDecks`.`deck_id`
                  AND `favoriteDecks`.`user_id` = 4
ORDER  BY `deck`.`id` DESC; 


SELECT deck.*
FROM (
  SELECT *
  FROM deck
  WHERE id IN (
    SELECT deck_id
    FROM favorite_deck
    WHERE favorite_deck.user_id = 4
  )
  ORDER BY deck.id DESC
  LIMIT 0, 4
) AS deck
INNER JOIN favorite_deck
ON deck.id = favorite_deck.deck_id;