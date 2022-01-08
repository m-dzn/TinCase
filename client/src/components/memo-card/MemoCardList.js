// import React from "react";
// import "./MemoCardList.scss";
// import cx from "classnames";
// import MemoCard from "./MemoCard";
// import FoldableArrowButton from "./FoldableArrowButton";
// import { useMemoCard } from "lib";

// const cards2 = [
//     {
//         id: 1,
//         title: "회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom)",
//         content: `내가 슬플 때마다
//         이 노래가 찾아와
//         세상이 둥근 것처럼 우린 동글동글

//         인생은 회전목마
//         우린 매일 달려가
//         언제쯤 끝나 난 잘 몰라

//         어머, 벌써 정신없이 달려왔어
//         Speed up 어제로 돌아가는 시곌 보다가`,
//         themeColor: "#cdc",
//     },
//     {
//         id: 2,
//         title: "인생 한잔",
//         content: `사랑도 이별도 오늘은 잠시 미뤄보자

//             불안한 청춘도 내일로 잠시 미뤄두자

//             떠나버린 그 사람 한잔 술 속에 털어버리고

//             한잔 술 두잔 술 내 어깨 빌려줄 테니까 마시자`,
//         themeColor: "#e5c1c5",
//     },
//     {
//         id: 3,
//         title: "어제 너는 나를 버렸어",
//         content: `어제 너는 나를 버렸어
//             나는 아무 변명하지 못하고
//             얌전하게 집에 돌아와
//             너무 피곤해 잠이 들었어
//             눈이 떠지자마자 정신이 없지
//             지각은 말이 안 돼 출근해야지
//             시간이 모자라 널 생각하고 아파하기엔
//             내가 너무 바빠

//             눈물이 맺혔을지도`,
//         themeColor: "#cca9dd",
//     },
// ];

// function MemoCardList({ className, cards }) {
//     const classnames = cx("memo-card-list", className);
//     const {
//         currentCardIndex,
//         nextCardIndex,
//         outCardIndex,
//         isPrev,
//         onClickPrev,
//         onClickNext,
//     } = useMemoCard(cards);

//     const setClassName = (cardIndex) => {
//         let cardClassNames = "";

//         switch (cardIndex) {
//             case currentCardIndex:
//                 cardClassNames = "current";
//                 break;
//             case nextCardIndex:
//                 cardClassNames = "next";
//                 break;
//             default:
//                 break;
//         }

//         if (outCardIndex === cardIndex) {
//             cardClassNames += cx(cardClassNames, isPrev ? "out" : "out-next");
//         }

//         return cardClassNames;
//     };

//     return (
//         <div className={classnames}>
//             <ul className="card-menu">
//                 {cards &&
//                     cards.map((card, index) => (
//                         <li key={card.id} className={setClassName(index)}>
//                             <MemoCard card={card} />
//                         </li>
//                     ))}
//             </ul>

//             <FoldableArrowButton onClick={onClickPrev}>
//                 PREV
//                 <br />
//                 CARD
//             </FoldableArrowButton>
//             <FoldableArrowButton right onClick={onClickNext}>
//                 NEXT
//                 <br />
//                 CARD
//             </FoldableArrowButton>
//         </div>
//     );
// }

// export default MemoCardList;
