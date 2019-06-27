import { topmost } from 'tns-core-modules/ui/frame';
import { Image } from 'tns-core-modules/ui/image';
import { Observable } from 'tns-core-modules/data/observable';
import { ImageFilters } from 'nativescript-image-filters-ios';

export class MainViewModel extends Observable {
  private _ImageFilters: ImageFilters;

  constructor() {
    super();
    this._ImageFilters = new ImageFilters();
  }

  resetExample(args) {
    const img = topmost().getViewById('imageOne') as Image;
    img.src = null;
    setTimeout(() => {
      img.src = '~/images/example.png';
    }, 100);
  }

  public sepiaEffect() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.coloringBook(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('sepia ERROR: ' + err);
      }
    );
  }

  public doBlackWhite() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.blackAndWhite(img).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('blackAndWhite ERROR: ' + err);
      }
    );
  }

  public effectInvert() {
    const img = topmost().getViewById('imageTwo') as Image;

    this._ImageFilters.invert(img).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('invert ERROR: ' + err);
      }
    );
  }

  public effectSepia() {
    const img = topmost().getViewById('imageTwo') as Image;

    this._ImageFilters.sepiaEffect(img, 1).then(
      result => {
        img.imageSource = result;
      },
      err => {
        console.log('sepiaEffect ERROR: ' + err);
      }
    );
  }
}
