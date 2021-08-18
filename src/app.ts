import { Component } from "./components/page/component.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent, Composable } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot, "beforeend");

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent("삼태민", "https://youtu.be/bRrbFjdisM0");
    this.page.addChild(video);

    const note = new NoteComponent("Note Title", "노트 내용내용내용");
    this.page.addChild(note);

    const todo = new TodoComponent("ToDo Title", "todo item");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
