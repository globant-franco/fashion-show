/** @jsxImportSource @emotion/react */
import background from "../images/main-bg.png"
import rectangle from '../images/rectangle.png'
import fashionAvatar from '../images/fashion-avatar.png'
import { Link } from "../components/lib";

export default function Landing() {
return(
  <main css={{
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}>
    <section css={{
      width: '100vw',
      height: '67%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <img src={fashionAvatar} alt="Fashion Avatar"
        css={{height: '45vh',
        width: '73vw',
        marginLeft: '-13vw',
        alignSelf: 'end'}}
      />
    </section>
    <section css={{
      width: '100vw',
      height: '39%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <img src={rectangle} alt="Foo" css={{position: 'absolute', bottom: 0,
  height: '39%', width: '100%'}}/>

      <div css={{
        fontFamily: 'Prosto One',
        fontSize: '22px',
        lineHeight: '27px',
        textAlign: 'center',
        color: 'white',
        marginTop: '5%',
        zIndex: 1,
        height: '5vh'
      }}>
        Dive into
      </div>

      <div css={{
        fontFamily: 'Porter Sans Block',
        fontSize: '22px',
        lineHeight: '27px',
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        height: '8vh'
        }}
      >
        Fashion <br/>Show
      </div>

      <div css={{
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '15vh',
        alignItems: 'center'
      }}>
        <Link to="/woman">
          Woman
        </Link>

        <Link to="/man">
          Man
        </Link>
      </div>
    </section>
  </main>
  )
}


