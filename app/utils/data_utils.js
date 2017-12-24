import profileJSON from '../configs/profile.json';
import techJSON from '../configs/tech.json';

class Profile {
  constructor() {
    console.log("profileJSON:", profileJSON);
  }

  about (){
    return profileJSON.about;
  }

  _getTechDetails(techKey){
    let techs = new Set(techJSON.techs);
    let filteredTechs = [...techs].filter(e=>e.key == techKey);
    if(!filteredTechs || filteredTechs.length==0){
      return;
    }
    return filteredTechs[0];
  }
  technologies(){
    let projects = profileJSON.projects
    let techKeysArray = new Set();
    let techArray = new Set();

    for(let project in projects){
      if(projects[project].technologies){
        for(let tech in projects[project].technologies){
          if(!techKeysArray.has(projects[project].technologies[tech].key)){
            techKeysArray.add(projects[project].technologies[tech].key)
            if(this._getTechDetails(projects[project].technologies[tech].key)){
              techArray.add(this._getTechDetails(projects[project].technologies[tech].key))
            }
          }
        }
      }
    }
    console.log("[...techKeysArray]:", [...techArray]);
    return [...techArray];
  }
  // [Symbol.iterator]() {
  //     return this;
  // }
  // next() {
  //      this.step++;
  //     //
  //     // if (this.step === 1)
  //     //     return {value: 'Ben'};
  //     // else if (this.step == 2)
  //     //     return {value: 'Ilegbodu'};
  //
  //     return {done: true};
  // }
}
export default Profile;
