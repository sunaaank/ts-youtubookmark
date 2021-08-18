import { BaseComponent } from "./../component.js";
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
          <div class="video__player"><iframe class="video__iframe" frameborder="0" allowfullscreen ng-show="showvideo"></iframe><h3 class="video__title"></h3></div>
          </section>`);

    const videoElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;

    videoElement.src = this.convertToEmbeddedUrl(url);
    // url -> videoId

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
