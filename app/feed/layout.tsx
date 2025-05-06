import { PropsWithChildren } from "react";
import {NavigationBar} from "./components/navigation-bar/NavigationBar";

const layout = ({children}: PropsWithChildren) => {
  return (
    <main>
      <NavigationBar />
      {children}
    </main>
  )
}

export default layout