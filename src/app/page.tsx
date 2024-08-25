'use client'
import InContent from "@/components/Content";
import styled from "styled-components";
import screens from "@/components/utils/breakepoints";

const StyledMain = styled.main`  
  gap: 24px;
  padding: 24px;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and ${screens.lg} {
    display: flex;
  }
`

export default function Home() {
  return (
      <StyledMain>
      <InContent title="Skate" content="This summer I wasent able to skate so mutch. My knee had popped to the side for a small period of time, but I wasent aware of that. My knee looked the same but it was hurting. But the next day, it looked like a footboll, and I could not walk on it att all! So I went to the doctor and they told me that my knee had popped to the side, and then returned back, and it went very fast so thats why I didnt see it. Why my knee popped out, is beckause I was trying to do afakie bigspin in the skatepark, but I landed on the tail, and the bored lunched up to the side on my knee. After that, I wasent alowed to skate for two months. But now im back and I love skating!!" color="#FEC0CE"/>
      <InContent title="Job" content="I was working this summer, but not everyday. I have been working on a wharehouse for a while, and the shifts are 4 hours. I can say no to taking shifts and I can say yes. That is why I choose this job because I can prioritate school when I need. I dond have a schedule from my job, so I dont have specific days that I have to work on. My job is about picking orders, so we are in a wharehouse but it is like a food store and we run around picking the customers orders. And we have to pick the orders for 1 or 2 minutes, so everybody is walking realy fast and it gets easier when you know where everything is in the store. But I have reasently got another job at Carlings. My family and I where going to by some clothes for my brothers birthay, and i started to sell clothes to my mother 'by 3 for 2' (I worked as a seller before.. I think im stuck in it) and then the boss saw me and asked if I wanted to come to an intervie. And now I work there!" color="#D5CFE1"/>
      <InContent title="Gotland" content="I was home for the moast, but I went to Gotland with my family for 1 week. My parents ownes a house, or a cabin there (my grandfather grew up in that cabin) so the cabin comes from family. My parents where staying there all sommer long, but I wanted to stay just for a week. It was relly fun, and boring. We went on seccond-hand markets for days and hours, so I got realy tired at the end of the day. But I met a kousin there, but we are cousins from far away. My cousins father is my fathers 'A cousin' and my cousin (the fathers son) is my 'B cousin'.. I dont understand it, but we are family from far away.. like 'seccond cousin' if that makes more sense, and then seccond seccond cousin. Anyway, it was realy nice to be on the countryside, forest and grass and cows everywhere. The air is fresher, its calm, its simple. Nice get away from town." color="#D6EFFF"/>
      <InContent title="New Home" content="This summer was the first summer in my own appartment. This summer I'v get more used to living by my self, and i'v got more comftrebul here and it smells like home and fells like home. In the beggining when I moved, I shed some tears because it felt so wierd walking away from my family and the house I grew up in and sleep somewhere else. It was so lonely and quiet. It just felt wrong not being with my family. But when the summer started, I had been living here for maybe 1-2 moths, so it fellt better when the summer started. Now I apsolutley love living by my self, I do not want to move back home. Dont get me wrong, I still miss my family and I see them every week, but living by my self has made me learn and grow and realise stuff, and I want to keep learning and keep growing. When you live by your self, you do everything a sertin way, you choose what you want to eat for dinner, you choose the place of everythig like kitchen utensils, where everything is placed, and I have more responsebilitys now. Paying bills, eating healty and cleaning and more. And it's going really well! I enjoy the quietness now, just living in my own space. No one is telling me to do the dishes, or help with the food because now I do everything by my self whenever I want to! Its been a jurney, and Im looking forward to keep growing in this experience." color="#FE654F"/>
      </StyledMain>
  );
}
