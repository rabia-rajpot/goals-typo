import { PropsWithChildren } from "react";


type imageGoals=PropsWithChildren<{image:{src:string;alt:string;}}>

const Header = ({image,children}:imageGoals) => {
  return (
    <header>
       {/* <img src={image.src} alt={image.alt} /> */}
       <img {...image}/>

       {children}

    </header>
  )
}

export default Header