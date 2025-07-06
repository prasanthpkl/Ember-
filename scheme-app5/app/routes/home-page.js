import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class HomePageRoute extends Route {
  @service store;
    model() {
    // return this.store.findAll('scheme', { reload: true });
    // return this.store.find("scheme",11);
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(this.store.findAll('scheme', { reload: true }));
            // reject("An error Occured")
        },3000);
    });
  }
}
