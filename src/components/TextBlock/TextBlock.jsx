import React from "react";
import ActionButton from "./ActionButton/ActionButton";
import Description from "./Description/Description";
import Title from "./Title/Title";
import SocialProof from "./SocialProof/SocialProof";

import ClientAudiophile from "/client-audiophile.svg";
import ClientDatabiz from "/client-databiz.svg";
import ClientMaker from "/client-maker.svg";
import ClientMeet from "/client-meet.svg";

import styles from "./Textblock.module.css";

const TextBlock = () => {
  const textBlock = {
    title: "Make Remote Work",
    description: `Get your team in sync, no matter your location Streamline processes, create team rituals, and watch productivity soar.
    `,
    buttonText: "Learn more",
  };

  const socialProofImg = [
    { name: "AudioPhile", src: ClientAudiophile },
    { name: "Databiz", src: ClientDatabiz },
    { name: "Maker", src: ClientMaker },
    { name: "Meet", src: ClientMeet },
  ];

  return (
    <div className={styles["text-block"]}>
      <Title title={textBlock.title} />
      <Description description={textBlock.description} />
      <ActionButton buttonText={textBlock.buttonText} />
      <div className={styles.clients}>
        {socialProofImg.map((img) => (
          <SocialProof {...img} />
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
