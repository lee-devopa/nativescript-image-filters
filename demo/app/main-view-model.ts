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
    this._ImageFilters.sepiaEffect(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('sepia ERROR: ' + err);
      }
    );
  }

  public gamma() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.gamma(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('gamma ERROR: ' + err);
      }
    );
  }

  public invert() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.invert(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('invert ERROR: ' + err);
      }
    );
  }

  public chromeEffect() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.chromeEffect(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('chromeEffect ERROR: ' + err);
      }
    );
  }

  public fadeEffect() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.fadeEffect(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('fadeEffect ERROR: ' + err);
      }
    );
  }

  public vintage() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.vintage(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('vintage ERROR: ' + err);
      }
    );
  }

  public colorize() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.colorize(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('colorize ERROR: ' + err);
      }
    );
  }

  public motionBlur() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.motionBlur(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('motionBlur ERROR: ' + err);
      }
    );
  }

  public comicBook() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.comicBook(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('comicBook ERROR: ' + err);
      }
    );
  }

  public crystalize() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.crystalize(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('crystalize ERROR: ' + err);
      }
    );
  }

  public colorEdges() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.colorEdges(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('colorEdges ERROR: ' + err);
      }
    );
  }

  public coloringBook() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.coloringBook(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('coloringBook ERROR: ' + err);
      }
    );
  }

  public dull() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.dull(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('dull ERROR: ' + err);
      }
    );
  }

  public threeD() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.threeD(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('threeD ERROR: ' + err);
      }
    );
  }

  public sketch() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.sketch(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('sketch ERROR: ' + err);
      }
    );
  }

  public pointillize() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.pointillize(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('pointillize ERROR: ' + err);
      }
    );
  }

  public spotLight() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.spotLight(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('spotLight ERROR: ' + err);
      }
    );
  }

  public kaleidoscope() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.kaleidoscope(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('kaleidoscope ERROR: ' + err);
      }
    );
  }

  public opTile() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.opTile(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('opTile ERROR: ' + err);
      }
    );
  }

  public perspectiveTile() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.perspectiveTile(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('perspectiveTile ERROR: ' + err);
      }
    );
  }

  public exposure() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.exposure(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('exposure ERROR: ' + err);
      }
    );
  }

  public brightness() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.brightness(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('brightness ERROR: ' + err);
      }
    );
  }

  public vibrant() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.vibrant(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('vibrant ERROR: ' + err);
      }
    );
  }

  public gaussianBlur() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.gaussianBlur(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('gaussianBlur ERROR: ' + err);
      }
    );
  }

  public blackAndWhite() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.blackAndWhite(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('blackAndWhite ERROR: ' + err);
      }
    );
  }

  public tonalEffect() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.tonalEffect(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('tonalEffect ERROR: ' + err);
      }
    );
  }

  public circularWrap() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.circularWrap(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('sketch ERROR: ' + err);
      }
    );
  }

  public holeDistort() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.holeDistort(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('holeDistort ERROR: ' + err);
      }
    );
  }

  public lightTunnel() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.lightTunnel(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('lightTunnel ERROR: ' + err);
      }
    );
  }

  public pinchDistort() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.pinchDistort(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('pinchDistort ERROR: ' + err);
      }
    );
  }

  public torusLensDistort() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.torusLensDistort(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('torusLensDistort ERROR: ' + err);
      }
    );
  }

  public vortexDistort() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.vortexDistort(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('vortexDistort ERROR: ' + err);
      }
    );
  }

  public circularScreen() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.circularScreen(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('circularScreen ERROR: ' + err);
      }
    );
  }

  public halftone() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.halftone(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('halftone ERROR: ' + err);
      }
    );
  }

  public lineScreen() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.lineScreen(img).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('lineScreen ERROR: ' + err);
      }
    );
  }

  public contrast() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.contrast(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('contrast ERROR: ' + err);
      }
    );
  }

  public sharpen() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.sharpen(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('sharpen ERROR: ' + err);
      }
    );
  }

  public posterize() {
    const img = topmost().getViewById('imageOne') as Image;
    this._ImageFilters.posterize(img, 0.1).then(
      result => {
        console.log(result);
        img.imageSource = result;
      },
      err => {
        console.log('posterize ERROR: ' + err);
      }
    );
  }
}
