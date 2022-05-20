import calc from '../images/projectsImages/calculator.png'
import qr from '../images/projectsImages/qr_creator.png'
import c19 from '../images/projectsImages/c19.png'
import notes from '../images/projectsImages/notes.png'


const projectsData = [
    {
        image: calc,
        link: '/react-calc/',
        title: 'Calculator',
        summary: 'Simple calculator built with React'
       
    },
    {
        image: qr,
        link: '/qr_creator/',
        title: 'QR Creator',
        summary: 'Convert text to QR Codes'
       
    },
    {
        image: c19,
        link: 'https://c19-dashboard.herokuapp.com/',
        title: 'Covid-19 Dashboard',
        summary: 'Sweden Covid-19 Statistics built with Python Plotly/Dash',
         },
             {
        image: notes,
        link: 'https://django-notesapp.herokuapp.com/',
        title: 'NotesApp',
        summary: 'Create and view simple notes. Built with Django, hosted on heroku',
         },


]


export default projectsData