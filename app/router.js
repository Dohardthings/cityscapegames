import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });


  this.route('cities');
  this.route('nashville-adventures');
  this.route('knights-of-infernal-order', function() {
    this.route('paywall');
    this.route('TermsConditions');
    this.route('rules');
    this.route('adventure', function() {
      this.route('prologue');
      this.route('chapter1-1');
      this.route('chapter1-2');
      this.route('chapter1-3');
      this.route('chapter1-4');
      this.route('chapter1-5');
      this.route('chapter1-6');
      this.route('chapter1-7');
      this.route('chapter2-1');
      this.route('chapter2-2');
      this.route('chapter2-3');
      this.route('chapter2-4');
      this.route('chapter2-5');
      this.route('chapter2-6');
      this.route('chapter2-7');
      this.route('chapter3-1');
      this.route('chapter3-2');
      this.route('chapter3-3');
      this.route('chapter3-4');
      this.route('chapter3-5');
      this.route('chapter3-6');
      this.route('chapter3-7');
      this.route('chapter4-1');
      this.route('chapter4-2');
      this.route('chapter4-3');
      this.route('chapter4-4');
      this.route('chapter4-5');
      this.route('chapter4-6');
      this.route('chapter4-7');
      this.route('chapter5-1');
      this.route('chapter5-2', function() {});
      this.route('epilogue-2');
      this.route('epilogue-1');
    });
  });
  this.route('we-will-contact-you');
});

export default Router;
