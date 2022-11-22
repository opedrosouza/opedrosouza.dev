---
title: Criando um post de exemplo com vários tipos de tags HTML
excerpt: Tentando compartilhar um pouco de conhecimento e o que estou fazendo através deste blog...
date: 2022-11-21 20:30:00
author: Pedro Souza
author_avatar_url: /images/pedro.png
category: development
category_color: red-500
languages: [ruby]
---

Este documento será a base de estilização para os futuros incríveis posts que escreverie neste site.
Vamos analizar cada grupo de tags que será utilizada e suas respectivas estilizações

## Headings

# h1

## h2

### h3

#### h4

##### h5

###### h6

## Listas

- Começar o projeto
- Fazer funcionar...
- Vai que cola né

## Blocos

```ruby
  class Person
    attr_reader :name, :age

    def initialize(name:, age:)
      @name = name
      @age = age
    end

    def introduce
      puts "Hi, my name is #{name} and I'm #{age} years old"
    end
  end
```

```ts
  class Animal
    constructor(sound: string) {
      this.sound = sound;
    }

    function makeAsound() {
      alert(this.sound)
    }
  end
```

## Paragráfos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis vulputate felis ut fringilla. Donec aliquam sagittis dolor sed iaculis. Aenean lorem tellus, viverra a nunc at, pellentesque rutrum elit. Aenean facilisis volutpat pellentesque. Donec in ornare elit, tempus dictum lectus. Nunc quis augue eu leo pretium commodo. Nullam id malesuada quam. Morbi mollis dolor quis est molestie, convallis molestie diam scelerisque. In ut velit eleifend, consequat nisi nec, porta sem. Phasellus hendrerit nibh nisi, eget tincidunt neque vulputate eu. Sed commodo sed urna congue venenatis. Curabitur arcu nisi, rutrum sed blandit id, blandit et velit. Nulla facilisi.

## Imagens

![Testing](/images/pedro.png)
