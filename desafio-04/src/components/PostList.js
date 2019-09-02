import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Victor Malheiro",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Victor Malheiro",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Filipe Deschamps",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Turma, o que acham de um vídeo com o Diego Fernandes?",
        comments: [
          {
            id: 1,
            author: {
              name: "Victor Malheiro",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Sensacional!"
          },
          {
            id: 2,
            author: {
              name: "Juliana Borges",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "TOP DE MAIS!"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: " Juliana Borges",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Foto nova",
        img: "https://i.pravatar.cc/700?img=5",
        comments: [
          {
            id: 1,
            author: {
              name: "Victor Malheiro",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Sensacional!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul class="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    );
  }
}
export default PostList;
