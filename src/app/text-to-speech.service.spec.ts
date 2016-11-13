/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TextToSpeechService } from './text-to-speech.service';

describe('Service: TextToSpeech', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextToSpeechService]
    });
  });

  it('should ...', inject([TextToSpeechService], (service: TextToSpeechService) => {
    expect(service).toBeTruthy();
  }));
});
