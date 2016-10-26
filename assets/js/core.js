$(function() {

    // Event colors
    var eventColors = [
        {
            //[DAY][MODULE CODE]
            //EG
            //Monday is day 0
            //Com147 on monday is
            //0147
            id: 0147,
            title: 'COM 147',
            room: '09F03',
            lec: 'Corr',
            cType: 'Lecture',
            module: 'Intro to Databases',
            start: '2016-11-07T09:15:00',
            end: '2016-11-07T10:05:00',
            color: '#26A69A'
        },
        {
            id: 0140,
            title: 'COM 140',
            room: '09F03',
            lec: 'Trombino',
            cType: 'Lecture',
            module: 'Computing Technologies',
            start: '2016-11-07T10:15:00',
            end: '2016-11-07T11:05:00',
            color: '#26A69A'
        },
        {
            id: 0177,
            title: 'COM 177',
            room: '16G42',
            lec: 'McChesney',
            cType: 'Tutorial',
            module: 'Visual Programming',
            start: '2016-11-07T12:15:00',
            end: '2016-11-07T13:05:00',
            color: '#3F51B5'
        },
        {
            id: 099,
            title: 'Tech Talk',
            room: '09F03',
            lec: 'McChesney',
            cType: 'Seminar',
            module: 'Teach Talk',
            start: '2016-11-07T13:15:00',
            end: '2016-11-07T14:05:00',
            color: '#26A69A'
        },
        {
            id: 0201,
            title: 'COM 201',
            room: '16G26',
            lec: 'Browne',
            cType: 'Computer Lab',
            module: 'Professional Awareness',
            start: '2016-11-07T14:15:00',
            end: '2016-11-07T15:05:00',
            color: '#26A69A'
        },
        {
            id: 01771,
            title: 'COM 177',
            room: '16E25',
            lec: 'McChesney',
            cType: 'Tutorial',
            module: 'Visual Programming',
            start: '2016-11-07T15:15:00',
            end: '2016-11-07T16:05:00',
            color: '#03A9F4'
        },
        {
            id: 1177,
            title: 'COM 177',
            room: '16G26',
            lec: 'McChesney',
            cType: 'Computer Lab',
            module: 'Visual Programming',
            start: '2016-11-08T09:15:00',
            end: '2016-11-08T11:05:00',
            color: '#26A69A'
        },
        {
            id: 1147,
            title: 'COM 147',
            room: '16G26',
            lec: 'Corr, Trombino',
            cType: 'Computer Lab',
            module: 'Intro Database',
            start: '2016-11-08T11:15:00',
            end: '2016-11-08T13:05:00',
            color: '#26A69A'
        },
        {
            id: 11471,
            title: 'COM 147',
            room: '21D23',
            lec: 'Corr',
            cType: 'Lecture',
            module: 'Intro Database',
            start: '2016-11-08T13:15:00',
            end: '2016-11-08T14:05:00',
            color: '#26A69A'
        },
        {
            id: 1201,
            title: 'COM 201',
            room: '21D23',
            lec: 'Browne',
            cType: 'Lecture',
            module: 'Professional Awareness',
            start: '2016-11-08T15:15:00',
            end: '2016-11-08T17:05:00',
            color: '#26A69A'
        },
        {
            title: 'Day Off',
            start: '2016-11-09T09:00:00',
            end: '2016-11-09T19:00:00',
            color: '#FF8A65',
            rendering: 'background'
        },
        {
            id: 3201,
            title: 'COM 201',
            room: '16D08',
            lec: 'Browne',
            cType: 'Tutorial',
            module: 'Professional Awareness',
            start: '2016-11-10T09:15:00',
            end: '2016-11-10T11:05:00',
            color: '#03A9F4'
        },
        {
            id: 3177,
            title: 'COM 177',
            room: '16D08',
            lec: 'McChesney',
            cType: 'Lecture',
            module: 'Visual Programming',
            start: '2016-11-10T12:15:00',
            end: '2016-11-10T13:05:00',
            color: '#26A69A'
        },
        {
            id: 3140,
            title: 'COM 140',
            room: '21D23',
            lec: 'Trombino',
            cType: 'Tutorial',
            module: 'Computer Technologies',
            start: '2016-11-10T13:15:00',
            end: '2016-11-10T14:05:00',
            color: '#26A69A'
        },
        {
            id: 32011,
            title: 'COM 201',
            room: '17C22',
            lec: 'Browne',
            cType: 'Tutorial',
            module: 'Professional Awareness',
            start: '2016-11-10T15:15:00',
            end: '2016-11-10T17:05:00',
            color: '#3F51B5'
        },
        {
            id: 4179,
            title: 'COM 179',
            room: '16E25',
            lec: 'Wang',
            cType: 'Lecture',
            module: 'Web Technologies',
            start: '2016-11-11T09:15:00',
            end: '2016-11-11T11:05:00',
            color: '#26A69A'
        },
        {
            id: 41791,
            title: 'COM 179',
            room: '16E25',
            lec: 'Wang',
            cType: 'Computer Lab',
            module: 'Web Technologies',
            start: '2016-11-11T11:15:00',
            end: '2016-11-11T13:05:00',
            color: '#26A69A'
        }
    ];
    // Event colors
    $('.fc').fullCalendar({
        // header: {
        //     left: '',
        //     center: '',
        //     right: ''
        // },
        header: false,
        columnFormat: 'dddd',
        defaultDate: '2016-11-07',
        defaultView: 'agendaWeek',
        displayEventTime: false,
        allDaySlot: false,
        editable: false,
        events: eventColors,
        minTime: '09:00:00',
		maxTime: '19:00:00',
		scrollTime: '09:15:00',
        firstDay: 1,
        hiddenDays: [6, 0],
        eventRender: function( event, element, view ) {
            // element.find('.fc-time').prepend(
            //      'Starts at '
            //  );
            element.find('.fc-title').prepend(
                 '<span class="center-block">' + event.module + '</span>'
             );
            element.find('.fc-title').append(
                '<span class="pull-right">' + event.room + '</span></br>' +
                event.lec + '<span class="pull-right">' + event.cType + '</span>'
            );
        }
    });

});
