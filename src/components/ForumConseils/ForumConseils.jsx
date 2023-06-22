import React from 'react'
import Navbar from '../NavbarForum/NavbarForum'
import { Div, Image, Titre, DivBody, P, H1, Lien } from '../Style/ForumConseil.style'
import { Link } from 'react-router-dom'
import "../Style/styleLibrary.css"
import { Item } from 'semantic-ui-react'





  function ForumConseils() {
    return (
      
      <React.Fragment>
      <Navbar />

      <DivBody>

        <Div>


          <H1>Forum privé</H1>


          <Item.Group>


            <Item>
              <Image src='../Images/firstpost.jpg' />
              <Link to='/postforum'>
                <Item.Content>  {/* le style est dans le stylelibrary.css */}
                  <Titre>Premier post</Titre>
                  <P>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorum autem vero libero, eligendi non magni modi, dignissimos labore nihil velit
                     accusantium recusandae assumenda dolore, earum aut amet distinctio ipsa.
                  </P>
                  <Lien>Lire le poste</Lien>
                </Item.Content>
              </Link>
            </Item>


            <Item>
              <Image src='../Images/post2.jpg' />
              <Link to='/postforum'>
                <Item.Content>
                  <Titre>Deuxième post</Titre>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio aut rerum fugit nisi aspernatur facere debitis!
                     In est maiores dignissimos pariatur non alias nesciunt voluptate reprehenderit quibusdam. Et, veniam.
                  </P>
                  <Lien>Lire le poste</Lien>
                </Item.Content>
              </Link>
            </Item>


            <Item>
              <Image src='../Images/post3.jpg' />
              <Link to='/postforum'>
                <Item.Content>
                  <Titre>Troisième post</Titre>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia doloremque amet impedit aspernatur dolor quasi!
                     Dolores ducimus eveniet rerum quod tempore dignissimos voluptatum inventore iste ex eaque. Fugiat, commodi.
                  </P>
                  <Lien>Lire le poste</Lien>
                </Item.Content>
              </Link>
            </Item>


            <Item>
              <Image src='../Images/post3.jpg' />
              <Link to='/postforum'>
                <Item.Content>
                  <Titre>Troisième post</Titre>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia doloremque amet impedit aspernatur dolor quasi!
                     Dolores ducimus eveniet rerum quod tempore dignissimos voluptatum inventore iste ex eaque. Fugiat, commodi.
                  </P>
                  <Lien>Lire le poste</Lien>
                </Item.Content>
              </Link>
            </Item>


            <Item>
              <Image src='../Images/post3.jpg' />
              <Link to='/postforum'>
                <Item.Content>
                  <Titre>Troisième post</Titre>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia doloremque amet impedit aspernatur dolor quasi!
                     Dolores ducimus eveniet rerum quod tempore dignissimos voluptatum inventore iste ex eaque. Fugiat, commodi.
                  </P>
                  <Lien>Lire le poste</Lien>
                </Item.Content>
              </Link>
            </Item>


          </Item.Group>

        </Div>
    
      </DivBody>
    </React.Fragment>
  )
}

export default ForumConseils