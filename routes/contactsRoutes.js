const express = require("express");
const router = express.Router();
const { getContacts, 
        createContacts, 
        getContact, 
        updateContact, 
        deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken)

// get all contacts, create contacts
router.route('/').get(getContacts).post(createContacts)

// get contact, update contact, delete contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;