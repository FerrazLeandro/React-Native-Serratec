import { RotasPublicas } from "./RotasPublicas"
import { useContext } from "react"
import AuthContext from "../contexts/AuthContexts"
import { RotasPrivadas } from "./RotasPrivadas"
import { ActivityIndicator, View } from "react-native"


const Routes = () => {
   const { logado, loading } = useContext(AuthContext)

   if (loading) return (
      <View>
         <ActivityIndicator />
      </View>
   )
   return (
      <>
         {logado ? <RotasPrivadas /> : <RotasPublicas />}

      </>

   )


}
export default Routes




// const [logado, setLogado] = useState(true)
// {logado ? <RotasPrivadas /> : <RotasPublicas />}