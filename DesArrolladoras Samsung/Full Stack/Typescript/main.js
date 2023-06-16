"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var mail_1 = require("./mail");
var person_1 = require("./person");
var phone_1 = require("./phone");
var personas = [];
personas.push(new person_1.Person("Alba", "Velasco González", 36, "71662168X", "24/08/1986", "verde", "mujer", new address_1.Address("Daniel Moyano", 6, 1, "A", 33011, "Oviedo", "Asturias"), new mail_1.Mail("Casa", "alba_r_velasco@hotmail.com"), new phone_1.Phone("Trabajo", 629978616), "Contactar únicamente de 8 a 16h"));
personas.push(new person_1.Person("Angel", "Martínez Fernández", 38, "71664887S", "29/07/1984", "azul", "hombre", new address_1.Address("Plaza Pueblo de Madrid", 11, 1, "Derecha", 33011, "Colloto", "Asturias"), new mail_1.Mail("Personal", "fangelmanuelmartinez@gmail.com"), new phone_1.Phone("Trabajo", 649549342), ""));
personas.push(new person_1.Person("Maria", "Velasco González", 57, "52581116A", "19/103/1966", "morado", "mujer", new address_1.Address("Otero", 12, 1, "I", 33008, "Oviedo", "Asturias"), new mail_1.Mail("Personal", "mjvelasco@hotmail.com"), new phone_1.Phone("Personal", 678521001), "Vacaciones en agosto"));
var personaFiltrada = personas.filter(function (a) { return a.dni == "71664887S"; })[0];
var nuevaDireccion = new address_1.Address("Daniel moyano", 6, 1, "A", 33011, "Oviedo", "Asturias");
personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);
var nuevoMail = new mail_1.Mail("Trabajo", "angelmf@gmail.com");
personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);
var nuevoTelefono = new phone_1.Phone("Casa", 985232823);
personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
