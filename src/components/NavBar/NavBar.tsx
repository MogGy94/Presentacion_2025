import * as React from 'react';
import './NavBar.css'

const NavBar = (props) => {
    const {contents} = props
    const keys = Object.keys(contents);

    React.useEffect(() => {
        let newStyles = document.createElement("style");
        document.head.appendChild(newStyles);
        const anchorSelectorPath = ".App-header ";
        const rule = keys.map(
            (item, i) => (`section#${item}:hover ~ ${anchorSelectorPath} a[href*="${item}"]`));

        const newRule = `
            ${rule.join(", ")}{ 
                color: #000; 
                background: #fff; 
                border-radius: 20px; 
            }`
        newStyles.sheet.insertRule(newRule, 0);
    });
    
    return(
    <>
        {keys.map((item,i) =>{
            return <section key={i} id={item}>{contents[item]}</section>
        })}
        <nav>
            {keys.map((item, i) => (<a key={`el-${i}`}href={`#${item}`}>{i}</a>))}
        </nav>
    </>
)}

export default NavBar;