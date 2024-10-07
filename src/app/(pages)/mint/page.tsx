"use client";

import Image from "next/image";
import land from "@/assets/land02.svg";
import MintPhase from "@/components/mint/mintPhase";
import CustomConnectButton from "@/components/mint/connectWallet3rd";

export default function MintPage() {
  return (
    <div className="relative">
      <div className="flex mx-auto my-auto justify-end p-5">
        <CustomConnectButton />
      </div>
      <div className="relative overflow-hidden h-screen bg-[linear-gradient(to_bottom,#639CB3,#8DDFFF_35%,#AFE9FF_60%,#F4FCFF_80%)]">
        {/* Background Land Image */}
        <div className="">
          <Image
            src={land}
            alt="land"
            layout="fill"
            objectFit="cover"
            sizes="80vw"
          />
        </div>
        <MintPhase />
      </div>
    </div>
  );
}
