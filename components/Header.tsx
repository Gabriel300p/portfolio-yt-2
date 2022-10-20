import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center justify-between">
        {/* Social Icons */}
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/gabriel300p/"
            fgColor="gray"
            bgColor="transparent"
            label="Linkedin"
          />
          <SocialIcon
            url="https://twitter.com/Gabriel3ap"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://dribbble.com/Gabriel300ap"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/Gabriel300p"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <p className="hidden md:inline-flex text-sm text-gray-400">
          Entre em contato
        </p>
      </div>
    </header>
  );
}

export default Header;
