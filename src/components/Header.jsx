import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [isLicenseVisible, setIsLicenseVisible] = useState(false);

  function licenseClick() {
    setIsLicenseVisible(!isLicenseVisible);
  }

  return (
    <>
      <header>
        <div className="logo">
          <span>Star Wars Memory Game</span>
        </div>
        <div className="links">
          <button onClick={licenseClick}>License</button>

          {isLicenseVisible ? (
            <>
              <div className="license-modal">
                <button onClick={licenseClick}>x</button>
                <h3>License</h3>
                <p>
                  Star Wars Memory Game is in no way affiliated with or endorsed
                  by Lucasfilm Limited or any of its subsidiaries, employees, or
                  associates. Star Wars Memory Game offers no suggestion that
                  the work presented on this web page is "official" or produced
                  or sanctioned by the owner or any licensees of the
                  aforementioned trademarks. Star Wars Memory Game will take all
                  steps necessary to ensure that any usage of trademarked items
                  in no way confuses the audience of this site as to its origin.
                  Star Wars Databank makes no claim to own Star Wars or any of
                  the copyrights or trademarks related to it. Images that are
                  displayed on this site are copyrighted to Lucasfilm Limited or
                  another partner of Lucas Licensing, or to the creator of the
                  image. Visitors may download any pictures displayed on this
                  site for personal use, as long as they are not used for
                  profit, and proper credit is given.
                </p>
                <p>
                  The data and images are used without claim of ownership and
                  belong to their respective owners.
                </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}
