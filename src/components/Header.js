import React, { Component } from "react";
import "../style.css";

import OpeningLogo from './OpeningLogo';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="container center column-dir logo">
                    <a href="/" class="logo">
                        <div class="container center">

                            <img class="logo" src="https://s3-alpha-sig.figma.com/img/39f7/0b2c/871d7164911b3d6440e9e7dc2e57e196?Expires=1590364800&Signature=bNtZIQ5mERMx8yFBhBtsVsmUADfh57wrC1sr1GnF13QZqqJ0EzH2PuI707HFrcOOPIIJFqtwJMuqe9b9zcOiQfbaUoaxadiD78Pn-kUtLBtdjyA-cgwPPHd1WRCLn7s~TVuGBKv2BPZRWL5z8CbY8xdUer6LUXp0RguDboBXniM7S6GHhs2cO0GGS8XRv7dPKoL6j-ebxuGIqikIa5QC3WyzQdr0LgV-tH67m9DBfvA3JKFbp-sup7MNl4Ys7w~WgbUvUV3Cjy6aoYse~soidd6OMY7K7JzwREKDDvw4CPxYwVyjlP4it~tIPS5SmOROduHrdVqJ3aUlxmHVGC4wCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                            <h1 class="logo"> pills2me</h1>
                        </div>
                    </a>

                </div>
            </div >
        );
    }
}




export default Header;