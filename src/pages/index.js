import * as React from "react"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>

      <h1> Mini Lab aula 3 JAMstack Gatsby</h1>

      <div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra metus neque, vel gravida enim porta nec. Praesent sed neque vel velit pretium suscipit congue sit amet odio. Donec suscipit volutpat enim, vitae faucibus dolor. Nulla nec ipsum sed lectus convallis condimentum eget ut tellus.  </p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra metus neque, vel gravida enim porta nec. Praesent sed neque vel velit pretium suscipit congue sit amet odio. Donec suscipit volutpat enim, vitae faucibus dolor. Nulla nec ipsum sed lectus convallis condimentum eget ut tellus.  </p>
      </div>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Página Inicial</title>