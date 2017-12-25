import profileJSON from '../configs/profile.json';
import techJSON from '../configs/tech.json';

class Profile {
  constructor() {
    console.log('profileJSON:', profileJSON);
    this.profileJSON = profileJSON;
    this.techJSON = techJSON;
  }

  about() {
    return this.profileJSON.about;
  }

  getTechDetails(techKey) {
    const techs = new Set(this.techJSON.techs);
    const filteredTechs = [...techs].filter(el => el.key === techKey);
    if (filteredTechs && filteredTechs.length > 0) {
      return filteredTechs[0];
    }
    return undefined;
  }
  technologies() {
    const { projects } = this.profileJSON;
    const techKeysArray = new Set();
    const techArray = new Set();

    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].technologies) {
        for (let j = 0; j < projects[i].technologies.length; j += 1) {
          if (!techKeysArray.has(projects[i].technologies[j].key)) {
            techKeysArray.add(projects[i].technologies[j].key);
            if (this.getTechDetails(projects[i].technologies[j].key)) {
              techArray.add(this.getTechDetails(projects[i].technologies[j].key));
            }
          }
        }
      }
    }
    return [...techArray];
  }
}
export default Profile;
