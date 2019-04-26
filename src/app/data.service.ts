import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data = [
    {
      name: 'Arneson, Patricia',
      dept: 'Business & Economics',
      phone: '7255',
      office: 'GH 206F',
      location: 'GH-215,GH-211,GH-208,GH-115',
      class:{
        mmw: '9:00-9:50am,12:00-12:50pm,10:00-10:50am,1:00-1:50pm',
        TR: '9:30-10:45am'
      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 11:50am'
      }
    },
    {
      name: 'Bondhus, JoAnn',
      dept: 'Business & Economics',
      phone: '7412',
      office: 'GH 111B',
      location: 'GH-110,GH-208,GH-115,GH-115,GH-208',
      class:{
        mmw: '1:00-1:50pm,11:00-11:50am,12:00-12:50pm',
        TR: '12:30-1:45pm,11:00-12:15pm'
      },
      time: {
        mmw: '',
        tr: '',
        both: '2:00pm - 3:00pm'
      }
    },
    {
      name: 'Curnyn, Molly',
      dept: 'Computer Technology & Information Systems',
      phone: '7253',
      office: 'GH 206G',
      location: 'GH-212,GH-212,Online,CT-207,CT-208,CT-208,CT-207',
      class:{
        mmw: '9:00-9:50am,10:00-10:50am,2:00-3:15pm',
        TR: '12:30-1:45pm, 2:00-3:15pm'
      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Dendinger, Laura',
      dept: 'Business & Economics',
      phone: '7020',
      office: 'GH 111E',
      location: 'GH-208,GH-110,GH-110,Online,Online',
      class:{
        mmw: 'No Class',
        TR: '9:30-10:45am, 11:00-12:15pm, 12:30-13:45pm'
      },
      time: {
        mmw: '10:30am - 12:00pm	',
        tr: '1:45pm - 2:45pm',
        both: ''
      }
    },
    {
      name: 'Doctorman, Lindsey',
      dept: 'Business & Economics',
      phone: '7029',
      office: 'GH 111H',
      location: 'GH-108,GH-108,Online,GH-108,Online,GH-115',
      class:{
        mmw: '10:00-10:50am,12:00-12:50pm,1:00-1:50pm',
        TR: '11:00-12:15pm'
      },
      time: {
        mmw: '11:00am - 12:00pm',
        tr: '9:00am - 10:00am',
        both: ''
      }
    },
    {
      name: 'Garvin, Sharon',
      dept: 'Business & Economics',
      phone: '7233',
      office: 'GH 111A',
      location: 'GH-110,BH-103,GH-210,GH-210,Online,Online',
      class:{
        mmw: '11:00-11:50am,1:00-1:50pm',
        TR: '8:00-9:15am,9:30-10:45am'
      },
      time: {
        mmw: '12:00pm - 1:00pm',
        tr: '11:00am - 12:00pm',
        both: ''
      }
    },
    {
      name: 'Garvin, Tim',
      dept: 'Computer Technology & Information Systems',
      phone: '7545',
      office: 'GH 206J',
      location: 'GH-214,GH-214,GH-214,GH-115',
      class:{
        mmw: '9:00-9:50am,10:00-10:50am,2:00-4:45(W)',
        TR: '9:30-10:45am'
      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Johnson, Debbie',
      dept: 'Computer Technology & Information Systems',
      phone: '7254',
      office: 'GH 206H',
      location: 'GH-211,CT-207,CT-207,CT-207',
      class:{
        mmw: '9:00-9:50am,10:00-10:50am,1:00-1:50pm',
        TR: '9:30-10:45am'
      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Kolterman, Trisha',
      dept: 'Business & Economics',
      phone: '7248',
      office: 'GH 111D',
      location: 'GH-115,GH-115,GH-115,GH-114,GH-114',
      class:{
        mmw: '10:00-10:50am,11:00-11:50am,1:00-1:50pm',
        TR: '9:30-10:45am,12:30-1:45pm'
      },
      time: {
        mmw: '8:00am - 9:30am',
        tr: '2:00pm - 4:00pm',
        both: ''
      }
    },
    {
      name: 'Kufner, Brian',
      dept: 'Business & Economics',
      phone: '7479',
      office: 'GH 206E',
      location: 'All Online',
      class:{
        mmw: 'None',
        TR: 'None'
      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am'
      }
    },
    {
      name: 'Lutt, Pat',
      dept: 'Business & Economics',
      phone: '7250',
      office: 'GH 111J',
      location: 'GH-114,GH-108,GH-114,GH-114',
      class:{
        mmw: '9:00-9:50am,12:00-12:50pm',
        TR: '9:30-10:45am,11:00-12:15pm'
      },
      time: {
        mmw: '8:00am - 8:50am',
        tr: '8:15am - 9:15am',
        both: ''
      }
    },
    {
      name: 'McLaughlin, Lindsay',
      dept: 'Business & Economics',
      phone: '7022',
      office: 'GH 111G',
      location: 'Online,Online,GH-210,GH-110,CC-224,Online',
      class:{
        mmw: '11:00-11:50am,4:00-6:45pm(W)',
        TR: '11:00-12:15pm'
      },
      time: {
        mmw: '9:00am - 10:00am',
        tr: '9:00am - 11:00am',
        both: ''
      }
    },
    {
      name: 'Nelson, Jeryl',
      dept: 'Business & Economics',
      phone: '7251',
      office: 'GH 206B',
      location: 'GH-210,GH-108,GH-210,CC-224,Online',
      class:{
        mmw: '8:00-8:50am,10:00-10:50am,12:00-12:50pm',
        TR: '4:00-6:45pm(R)'
      },
      time: {
        mmw: '',
        tr: '',
        both: 'MWF: 9:00am - 9:50am and MW: 11:00am - 11:50am'
      }
    },
    {
      name: 'Nicholson, Lori',
      dept: 'Computer Technology & Information Systems',
      phone: '7071',
      office: 'GH 206K',
      location: 'CT-203,CT-203,Online,CT-207,CT-207,CT-203',
      class:{
        mmw: '11:00-11:50am,12:00-12:50pm',
        TR: '11:00-12:15pm,2:00-3:15pm,3:30-4:45pm'
      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 10:50am	'
      }
    },
    {
      name: 'Parker, Chuck',
      dept: 'Business & Economics',
      phone: '7036',
      office: 'GH 111K',
      location: 'Online,GH-108,GH-108,GH-108,Online,CC-225,GH-108',
      class:{
        mmw: '9:00-9:50am,11:00-11:50am',
        TR: '8:00-9:15am,12:30-1:45pm,4:00-6:45pm(T)'
      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am	R: 1:45pm - 3:45pm'
      }
    },
    {
      name: 'Parker, Karen',
      dept: 'Business & Economics',
      phone: '7245',
      office: 'GH 106',
      location: 'Online,GH-215,GH-215,GH-211,Online',
      class:{
        mmw: '12:00-12:50pm',
        TR: '11:00-12:15pm'
      },
      time: {
        mmw: '',
        tr: '',
        both: 'By appointment only'
      }
    },
    {
      name: 'Pulfer, Jodi',
      dept: 'Business & Economics',
      phone: '7021',
      office: 'GH 111C',
      location: 'GH-115',
      class:{
        mmw: 'None',
        TR: '8:00-9:15am'
      },
      time: {
        mmw: '',
        tr: '',
        both: '9:30am - 10:30am	'
      }
    },
    {
      name: 'Ras, Gerard',
      dept: 'Business & Economics',
      phone: '7464',
      office: 'GH 206D',
      location: 'GH-108,Online,GH-208,GH-210,Online,Online',
      class:{
        mmw: '9:00-9:50am,10:00-10:50am',
        TR: '9:30-10:45am'
      },
      time: {
        mmw: '11:00am - 11:50am',
        tr: '8:30am - 9:20am',
        both: ''
      }
    },

  ]


  findTecherByName(name) {
    return this.data.find(x => x.name === name);
  }
}
