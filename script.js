const intro=document.getElementById('intro');
const question=document.getElementById('question');
const planner=document.getElementById('planner');
const success=document.getElementById('success');
const music=document.getElementById('bgMusic');

openBtn.onclick=()=>{
 music.play().catch(()=>{});
 intro.classList.remove('active');
 question.classList.add('active');
};

noBtn.onmouseover=()=>{
 noBtn.style.transform=`translate(${Math.random()*180-90}px,${Math.random()*120-60}px)`;
};

yesBtn.onclick=()=>{
 question.classList.remove('active');
 planner.classList.add('active');
};

finishBtn.onclick=()=>{
 const d=date.value,t=time.value,f=food.value;
 if(!d||!t||!f){alert('Complete everything first 💕');return;}
 planner.classList.remove('active');
 success.classList.add('active');
 summary.innerHTML=`<b>📅</b> ${d}<br><b>🕒</b> ${t}<br><b>🍜</b> ${f}`;
 if(window.confetti){
  confetti({particleCount:180,spread:120,origin:{y:.6}});
 }
};

