const express = require('express')
const router = express.Router()
const Contactcontroller = require('../Controllers/Contactcontroller');

router.post("/ajouter" ,Contactcontroller.ajoutercontact)
router.post("/:id/modifier" ,Contactcontroller.modifiercontact)
router.get("/:id/supprimer" ,Contactcontroller.supprimercontact)
router.get("/lister" ,Contactcontroller.listercontact)

module.exports = router;
