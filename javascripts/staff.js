let panelStatus= false;

let panelToggle= function(){
	
  let getPanel= document.querySelector('.staff-panel');
  
  if (panelStatus == false){
  	getPanel.style.visibility='visible';
    

    panelStatus= true;
  }else if (panelStatus == true){
  	getPanel.style.visibility='hidden';

    panelStatus= false;
  }
}
let panel= document.querySelector(".staff-panel");
let staffCed= document.querySelector('#ced');
let staffReioms= document.querySelector('#reioms');
let staffIII= document.querySelector('#iii');
let staffHanzo= document.querySelector('#hanzo');
let staffEllioti= document.querySelector('#ellioti');
let staffShelbz= document.querySelector('#shelbz');

function staffBio(name,age,position,skills){
    this.Name= name;
    this.Age= age;
    this.Position= position;
    this.Skills= skills;
}
const ced= new staffBio("Name: Ced","Age: "+23,"Assistant"," Drinker, Buyer, Dancer");
const reioms= new staffBio("JC",23,"Assistant"," Drinker, Buyer, Story Teller");
const iii= new staffBio("Alex",23,"Manager / CEO"," Drinker, DJ, Dancer");
const ellioti= new staffBio("Ellioso",23,"Assistant"," Drinker, Buyer, Story Teller");
const hanzo= new staffBio("Hanns",21,"Assistant"," Drinker, Buyer, Story Teller");
const shelbz= new staffBio("MJ",24,"Head Chef"," Drinker, Buyer, Story Teller");

let imageHolder= document.querySelector("img");

function panelStaff(staffName){
  
  document.querySelector("#staff-name").innerHTML= staffName.Name;
  document.querySelector("#staff-age").innerHTML= staffName.Age;
  document.querySelector("#staff-position").innerHTML= staffName.Position;
  document.querySelector("#staff-skills").innerHTML= staffName.Skills;

}

function panelEvents(staffConst){
  panelStaff(staffConst);
  panel.classList.toggle('panel-open');
}

staffCed.addEventListener('click',() => {
  panelToggle();
  panelEvents(ced);
  document.querySelector('#ced-image').style.display= 'inline-block';
});

staffReioms.addEventListener('click',() => {
  panelToggle();
  panelEvents(reioms);
  document.querySelector('#reioms-image').style.display= 'inline-block';
});

staffIII.addEventListener('click',() => {
  panelToggle();
  panelEvents(iii);
  document.querySelector('#iii-image').style.display= 'inline-block';
});

staffShelbz.addEventListener('click',() => {
  panelToggle();
  panelEvents(shelbz);
  document.querySelector('#shelbz-image').style.display= 'inline-block';
});

staffEllioti.addEventListener('click',() => {
  panelToggle();
  panelEvents(ellioti);
  document.querySelector('#ellioti-image').style.display= 'inline-block';
});

staffHanzo.addEventListener('click',() => {
  panelToggle();
  panelEvents(hanzo);
  document.querySelector('#hanzo-image').style.display= 'inline-block';
});

document.querySelector("#panel-close-btn").addEventListener('click',panelToggle);
document.querySelector("#panel-close-btn").addEventListener('click',() => {
panel.classList.remove('panel-open');
  document.querySelector('#ced-image').style.display= 'none';
  document.querySelector('#reioms-image').style.display= 'none';
  document.querySelector('#iii-image').style.display= 'none';
  document.querySelector('#shelbz-image').style.display= 'none';
  document.querySelector('#ellioti-image').style.display= 'none';
  document.querySelector('#hanzo-image').style.display= 'none';
});