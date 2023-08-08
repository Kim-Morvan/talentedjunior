"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const Signin = () => {
  const userRef = useRef();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const serverResponse = await axios.post(
        "api/auth/signin",
        JSON.stringify({ email, password }),
      );
      console.log(JSON.stringify(serverResponse?.data));

      router.push("/dashboard");

      setEmail("");
      setPassword("");
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message };
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row justify-center max-w-5xl space-x-5">
      <div className="space-y-5 w-[60%]">
        <p className="text-[#2196f3] text-5xl font-medium">Talented Junior</p>
        <h2 className="text-white text-lg">
          “ Rien au monde ne peut remplacer la persistance. Ni le talent: rien
          n&apos;est plus commun que les personnes talentueuses sans succès. Ni
          le génie: le génie non reconnu est presque un proverbe. Ni
          l&apos;éducation: le monde est rempli d&apos;épaves éduquées. Seules
          la persistance et la détermination sont omnipotentes. ”
        </h2>
        <p className="text-white text-lg">Calvin Coolidge</p>
      </div>
      <div className="flex flex-row p-5 bg-[#292a2d] shadow rounded-lg  w-[40%]">
        <section className="space-y-10">
          <div>
            <form onSubmit={handleSignin} className="space-y-2">
              <input
                className="text-black bg-[#202124] text-lg py-1.5 px-4 rounded-lg w-full"
                htmlFor="email"
                type="text"
                id="email"
                placeholder="Adresse e-mail"
                ref={userRef}
                autoComplete="off"
                value={email}
                email="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                className="text-black bg-[#202124] text-lg py-1.5 px-4 rounded-lg w-full"
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Mot de passe"
                autoComplete="off"
                value={password}
                password="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                // disabled={true}
                className="px-4 py-1.5 bg-[#2196f3] rounded-lg w-full text-white"
              >
                {loading ? "...chargement" : "Se connecter"}
              </button>
            </form>
          </div>
          <div className="">
            <p className="text-white">Pas encore de compte ?</p>
            <Link href="register">
              {/* <Popup    trigger={} modal nested  ></Popup> */}
              <button className="px-4 py-1.5 text-[#2196f3] rounded-lg w-full border-2 border-[#2196f3] bg bg-white">
                Créer un nouveau compte
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
