import {addNewContact, getContacts, getContactWithID, updateContact, deleteContact} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        next();
},getContacts)
    .post(addNewContact)
    app.route('/contact/:contactID')
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact);

}

export default routes;