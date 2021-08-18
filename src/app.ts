import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { Component } from "./components/page/component.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { ImageComponent } from "./components/page/item/image.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent(
    //   "Image Title",
    //   "https://picsum.photos/600/300"
    // );
    // this.page.addChild(image);

    // const video = new VideoComponent("삼태민", "https://youtu.be/bRrbFjdisM0");
    // this.page.addChild(video);

    // const note = new NoteComponent("Note Title", "노트 내용내용내용");
    // this.page.addChild(note);

    // const todo = new TodoComponent("ToDo Title", "todo item");
    // this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();

      dialog.addChild(mediaSection);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(mediaSection.title, mediaSection.url);
        // url: https://picsum.photos/600/300
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(dialogRoot);
    });

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();

      dialog.addChild(mediaSection);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const video = new VideoComponent(mediaSection.title, mediaSection.url);
        this.page.addChild(video);

        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(dialogRoot);
    });

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();

      dialog.addChild(textSection);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const todo = new TodoComponent(textSection.title, textSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(dialogRoot);
    });

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();

      dialog.addChild(textSection);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const note = new NoteComponent(textSection.title, textSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });

      dialog.attachTo(dialogRoot);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
