// // import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
// import { ScheduleComponent, WorkWeek, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// import { defaultData } from './datasource';
// import { extend } from '@syncfusion/ej2-base';

// const Calendar = () => {
//     return ( 
//         <>
//             <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data }}>
//                 <ViewsDirective>
//                     <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00'/>
//                     <ViewDirective option='Week' startHour='07:00' endHour='15:00'/>
//                     <ViewDirective option='Month' showWeekend={false}/>
//                 </ViewsDirective>
//                 <Inject services={[WorkWeek, Week, Month]}/>
//             </ScheduleComponent>
//         </>
//      );
// }
 
// export default Calendar;