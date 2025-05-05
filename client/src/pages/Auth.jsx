import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useParams } from "react-router-dom";
import Connexion from "../components/Connexion";

export default function Auth() {
    const { mode } = useParams(); 

    const items = [
        { to: "/auth/connexion",  label: "Connexion" },
        { to: "/auth/inscription",  label: "Inscription" },
      ];
    

    return (
        <>
           <Header navItems={items}  />

           {mode === "connexion" ? <Connexion /> : <Connexion />}

           <Footer />
        </>
    )
}