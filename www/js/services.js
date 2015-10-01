angular.module('starter.services', [])

.factory('Reports', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var reports = [{
    id: 0,
    title: 'Injuries in Google self-driving car accident By Chris Isidore',
    description: 'Google\'s self-driving car has achieved a notable first, though not one it was eager for - its first accident with injuries.',
    image: 'http://i2.cdn.turner.com/money/dam/assets/150717072505-google-lexus-self-driving-car-780x439.jpg',
    featured: true
  },
  {
    id: 1,
    title: 'Air show crash: Police say death toll \'may rise\' as high as 20',
    description: 'Police said Monday that the death toll from the crash of a plane onto a highway Sunday at an air show in southeastern England may rise from the current highly likely count of 11.',
    image: 'https://scontent-cai1-1.cdninstagram.com/hphotos-xfp1/t51.2885-15/s480x480/e35/10890877_504735583021235_994027639_n.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'RBet you wish you could sprint at 105 -- this Japanese man can',
    description: 'A Japanese man has set a new Guinness world record in track and field -- at the ripe old age of 105.',
    image: 'http://i2.cdn.turner.com/cnnnext/dam/assets/150924152200-hidekichi-miyazaki-exlarge-169.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Actress Kaley Cuoco splitting from husband Ryan Sweeting',
    description: 'Actress Kaley Cuoco and her husband, Ryan Sweeting, are calling it quits after nearly two years of marriage.',
    image: 'http://i2.cdn.turner.com/cnnnext/dam/assets/140806110927-kaley-cuoco-sweeting-ryan-sweeting-june-2014-horizontal-large-gallery.jpg',
    featured: false
  }

];

  return {
    all: function() {
      return reports;
    },
    getFeatured: function() {
      var i, featuredReports = [];

      for (i = 0; i < reports.length; ++i) {
        if (reports[i].featured) {
          featuredReports.push(reports[i]);
        }
      }
      return featuredReports;
    }
  };
});
