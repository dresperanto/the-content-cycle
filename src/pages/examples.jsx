import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List } from "semantic-ui-react"

const examples = () => {
  return (
    <Layout>
      <SEO title="Examples" />
      <div className="animated fadeIn mainContent">
        <h2>Heading</h2>
        <p>
          Ut a leo volutpat, ultrices magna eget, volutpat libero. Proin
          sagittis felis lectus, ac iaculis justo ullamcorper ac. Donec cursus
          quis massa nec fermentum. In vel nulla non leo pharetra varius. Duis
          cursus urna id libero egestas, et ultrices orci interdum. Aenean t
        </p>
        <p>
          Duis ac sapien purus. Morbi posuere aliquet tellus, at pharetra nulla
          fermentum at. Donec aliquam, felis vitae faucibus elementum, odio
          tortor venenatis turpis, at convallis sem magna sed velit. Ut a leo
          volutpat, ultrices magna eget, volutpat libero. Proin sagittis felis
          lectus, ac iaculis justo ullamcorper ac. Donec cursus quis massa nec
          fermentum. In vel nulla non leo pharetra varius. Duis cursus urna id
          libero egestas, et ultrices orci interdum. Aenean
        </p>
        <List>
          <List.Item>
            <List.Icon name="pencil" />
            <List.Content>
              <List.Header as="a">Example 1</List.Header>
              <List.Description>
                In vel nulla non leo pharetra varius. Duis cursus urna id libero
                egestas, et ultrices orci interdum.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pencil" />
            <List.Content>
              <List.Header as="a">Example 2</List.Header>
              <List.Description>
                In vel nulla non leo pharetra varius. Duis cursus urna id libero
                egestas, et ultrices orci interdum.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pencil" />
            <List.Content>
              <List.Header as="a">Example 3</List.Header>
              <List.Description>
                In vel nulla non leo pharetra varius. Duis cursus urna id libero
                egestas, et ultrices orci interdum.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="pencil" />
            <List.Content>
              <List.Header as="a">Example 4</List.Header>
              <List.Description>
                In vel nulla non leo pharetra varius. Duis cursus urna id libero
                egestas, et ultrices orci interdum.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          pellentesque nisl. Pellentesque libero orci, semper ut pretium ac,
          molestie in lacus. Duis ac sapien purus. Morbi posuere aliquet tellus,
          at pharetra nulla fermentum at. Donec aliquam, felis vitae faucibus
          elementum, odio tortor venenatis turpis, at convallis sem magna sed
          velit. Ut a leo volutpat, ultrices magna eget, volutpat libero. Proin
          sagittis felis lectus, ac iaculis justo ullamcorper ac. Donec cursus
          quis massa nec fermentum. In vel nulla non leo pharetra varius. Duis
          cursus urna id libero egestas, et ultrices orci interdum. Aenean t
        </p>
      </div>
    </Layout>
  )
}

export default examples
