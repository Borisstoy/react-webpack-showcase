// it should be present in every JavaScript file we are going to create through the course of this tutorial.

"use strict";

//--------------------------------------------------------------------

const artists = [
  {
    'id': 'aphex-twin',
    'name': 'Aphex Twin',
    'country': 'uk',
    'birth': '1973',
    'image': 'aphex.jpg',
    'cover': 'aphex-cover.png',
    'link': 'https://aphextwin.warp.net/',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
    'description': "Richard David James (born 18 August 1971), best known by his recording alias Aphex Twin, is an Irish electronic musician, known for his influential and idiosyncratic work in styles such as ambient techno and IDM in the 1990s, for which he won widespread critical acclaim. He is also the co-founder of Rephlex Records with Grant Wilson-Claridge. Initially releasing acid techno music under aliases such as AFX and Polygon Window, James first received widespread acclaim for his 1992 album Selected Ambient Works 85-92. He rose to mainstream popularity with his 1997 EP Come to Daddy and his 1999 single 'Windowlicker'. After a period of relative inactivity following the release of his 2001 album Drukqs, James returned in 2014 with a new album titled Syro, which won him a Grammy Award for Best Dance/Electronic Album.",
    'url': [
      "https://www.youtube.com/watch?v=gQ-fydM1nt0",
      "https://www.youtube.com/watch?v=goDd02TTxBA",
      "https://www.youtube.com/watch?v=nWnUuosQwZY"
    ]
  },

  {
    'id': 'minilogue',
    'name': 'Minilogue',
    'country': 'sw',
    'birth': '1973',
    'image': 'minilogue.jpg',
    'cover': 'aphex-cover.png',
    'link': 'https://aphextwin.warp.net/',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
    'description': "Minilogue is a Scandinavian melodic Techno music group consisting of Sebastian Mullaert and Marcus Henriksson. The name is a blend of minimal (the musical style) and dialogue, which refers to music as a form of communication. Beside their music production as Minilogue, they were both involved in the group Son Kite,[ Trimatic and IMPS (with Ian Chaplin and Philip Rex), Since 2014, their collaboration as Minilogue has ended.",
    'url': [
      "https://www.youtube.com/watch?v=gQ-fydM1nt0",
      "https://www.youtube.com/watch?v=goDd02TTxBA",
      "https://www.youtube.com/watch?v=nWnUuosQwZY"
    ]
  }

];

export default artists;
