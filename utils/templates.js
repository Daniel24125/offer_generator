
module.exports = {
    original: (position, city, time, image)=>{
        return `
            <svg id="Grupo_3" data-name="Grupo 3" width="600" height="504" viewBox="0 0 600 504">
                <defs>
                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 170 50">
                    <image width="170" height="50" href="${process.env.REACT_APP_API_BASE}leader-logo-v3.png" />
                    </pattern>
                    <pattern id="pattern-2" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 1125 750">
                    <image width="1125" height="750" href="${image}"/>
                    </pattern>
                </defs>
                <rect id="Retângulo_1" data-name="Retângulo 1" width="392" height="503" fill="#fff"/>
                <rect id="Retângulo_2" data-name="Retângulo 2" width="206" height="504" transform="translate(394)" fill="#efc000"/>
                <line id="Linha_5" data-name="Linha 5" y1="503" transform="translate(394.5 0.5)" fill="none" stroke="#000" stroke-width="4"/>
                <line id="Linha_4" data-name="Linha 4" y1="503" transform="translate(385.5 0.5)" fill="none" stroke="#efc000" stroke-width="4"/>
                <rect id="Retângulo_3" data-name="Retângulo 3" width="551" height="51" transform="translate(0 98)" fill="#2a2a2a"/>
                <rect id="leader-logo-v3" width="243" height="71" transform="translate(70 15)" fill="url(#pattern)"/>
                <text id="city" transform="translate(420 73)" fill="#2a2a2a" font-size="20" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="22">${city}</tspan></text>
                <text id="position" transform="translate(18 134)" fill="#fff" font-size="25" font-family="SegoeUI-Bold, Segoe UI" font-weight="700" letter-spacing="0.091em"><tspan x="0" y="0">${position}</tspan></text>
                <text id="ENTRE_EM_CONTACTO_CONNOSCO" data-name="ENTRE EM CONTACTO CONNOSCO" transform="translate(41 405)" font-size="16" font-family="SegoeUI-Bold, Segoe UI" font-weight="700" letter-spacing="0.091em"><tspan x="0" y="0">ENTRE EM CONTACTO CONNOSCO</tspan></text>
                <rect id="image" width="435" height="234" transform="translate(116 149)" fill="url(#pattern-2)"/>
                <path id="Icon_material-email" data-name="Icon material-email" d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z" transform="translate(46 421.5)" fill="#efc000"/>
                <path id="Icon_awesome-phone-square" data-name="Icon awesome-phone-square" d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h24.75A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Zm-21.516,27a1.055,1.055,0,0,1-1.028-.818l-1.055-4.57a1.055,1.055,0,0,1,.612-1.207l4.922-2.109a1.055,1.055,0,0,1,1.232.3l2.179,2.664a16.3,16.3,0,0,0,7.789-7.789L18.6,13.543a1.055,1.055,0,0,1-.3-1.232l2.109-4.922a1.055,1.055,0,0,1,1.207-.612l4.57,1.055A1.054,1.054,0,0,1,27,8.859,20.39,20.39,0,0,1,6.609,29.25Z" transform="translate(47.5 462.5)" fill="#efc000"/>
                <text id="gaia.groupeleader_hotmail.com" data-name="gaia.groupeleader@hotmail.com" transform="translate(87 447)" font-size="17" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">gaia.groupeleader@hotmail.com</tspan></text>
                <text id="_966_193_134_223_753_514" data-name="966 193 134 | 223 753 514" transform="translate(87 488)" font-size="17" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">966 193 134 | 223 753 514</tspan></text>
                <text id="www.groupeleader.pt" transform="translate(409 482)" font-size="19" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">www.groupeleader.pt</tspan></text>
            </svg>
        `
    }
}