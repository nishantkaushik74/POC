import { Component, ViewChild } from '@angular/core';
import { schedulerConfig } from 'src/app/app.config';
import { BryntumSchedulerComponent } from '@bryntum/scheduler-angular';
import { SupabaseService } from 'src/app/supabase.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view1',
    templateUrl: './view1.component.html',
    styleUrls: ['./view1.component.css']
})
export class View1Component {
    constructor(private readonly supabase: SupabaseService,
        private router: Router) {
        this.getData();
    }

    navigateToComponent2() {
        this.router.navigate(['/superset']);
    }

    async getData() {
        debugger;
        var data: any = await this.supabase.getData();
        console.log(data);
        this.events = [];
        this.resources = [];
        data.data.forEach((element: any) => {

            if (this.resources.filter(x => x.name == element.Customer).length == 0) {
                this.resources.push({ id: element.id, name: element.Customer });
            }
        });
        var count = 0;
        data.data.forEach((element: any) => {
            debugger;
            if (count <= 3) {
                this.events.push({
                    resourceId: this.resources.filter(x => x.name == element.Customer)[0].id, startDate: !element.Date.startsWith("20")
                        ? '20' + element.Date
                        : element.Date + '-' + element.Date.split('/')[1] + '-' + element.Date.split('/')[0], endDate: !element.Client_ETA.startsWith("20")
                            ? '20' + element.Client_ETA
                            : element.Client_ETA + '-' + element.Client_ETA.split('/')[1] + '-' + element.Client_ETA.split('/')[0], eventColor: this.changeColor(count), name: element.Customer
                })
                count++;
                if (count == 4) {
                    count = 0;
                }
            }
        });
    }
    changeColor(count: any) {
        var color = "";
        switch (count) {
            case 0:
                color = 'orange'
                break;
            case 1:
                color = 'blue'
                break;
            case 2:
                color = 'pink';
                break;
            case 3:
                color = 'red';
                break;
            default:
                color = 'green'
                break;


        }
        return color;
    }
    async onSubmit(): Promise<void> {


        // try {


        //   const { error } = await this.supabase.signIn(email)
        //   if (error) throw error
        //   alert('Check your email for the login link!')
        // } catch (error) {
        //   if (error instanceof Error) {
        //     alert(error.message)
        //   }
        // } finally {
        //   this.signInForm.reset()
        //   this.loading = false
        // }
    }

    features = {
        timeRanges: {
            showCurrentTimeLine: true,
            showHeaderElements: true,
            enableResizing: true
        }
    }
    resources = [
        { id: 1, name: '2571 RhinoPlay' },
        // { id: 2, name: '2499 Iplex Pipelines Australia' },
        // { id: 3, name: '4150 Tasmanian Shipping Supplies' },
        // { id: 4, name: '2724 Early Auto Electrical' },
        // { id: 5, name: '2571 RhinoPlay' },
        // { id: 6, name: '2571 RhinoPlay' },
        // { id: 7, name: '2571 RhinoPlay' },
        // { id: 8, name: '3401 Goldacres' },
        // { id: 9, name: '2558 PFG Group Pty Ltd' },
        // { id: 10, name: '2544 OMF Engineering' }
        // { id: 11, name: '2571 RhinoPlay' },
        // { id: 12, name: '2571 RhinoPlay' },
        // { id: 13, name: '2571 RhinoPlay' },
        // { id: 14, name: '2571 RhinoPlay' },
        // { id: 15, name: '2571 RhinoPlay' },
        // { id: 16, name: '2503 Jenway Industries Pty Ltd' },
        // { id: 17, name: '4040 Macnaught Pty Ltd' },
        // { id: 18, name: '4040 Macnaught Pty Ltd' },
        // { id: 19, name: '4040 Macnaught Pty Ltd' },
        // { id: 20, name: '2608 Vacuum Truck Supplies' },
        // { id: 21, name: '2558 PFG Group Pty Ltd' },
        // { id: 22, name: '2571 RhinoPlay' },
        // { id: 23, name: '2571 RhinoPlay' },
        // { id: 24, name: '2571 RhinoPlay' },
        // { id: 25, name: '2571 RhinoPlay' },
        // { id: 26, name: '2399 Agilent Technologies Singapore' },
        // { id: 27, name: '2481 Green Loo Pty Ltd' },
        // { id: 29, name: '2571 RhinoPlay' },
        // { id: 30, name: '4053 Traffix Devices Inc' },
        // { id: 31, name: '3745 M & N Enterprises Pty Ltd T/ A Playscape Creations' },
        // { id: 32, name: '2399 Agilent Technologies Singapore' },
        // { id: 33, name: '2554 Performance Feeds' },
        // { id: 34, name: '2515 Lastings' },
        // { id: 35, name: '2437 Containit Solutions' },
        // { id: 36, name: '2571 RhinoPlay' },
        // { id: 37, name: '2503 Jenway Industries Pty Ltd' },
        // { id: 38, name: '4053 Traffix Devices Inc' },
        // { id: 39, name: '2608 Vacuum Truck Supplies' },
        // { id: 40, name: ' 4040 Macnaught Pty Ltd' },
        // { id: 41, name: ' 2571 RhinoPlay' },
        // { id: 42, name: ' 2503 Jenway Industries Pty Ltd' },
        // { id: 43, name: '2397 Adventure Playgrounds P / L' },
        // { id: 44, name: '4053 Traffix Devices Inc' },
        // { id: 45, name: '2571 RhinoPlay' },
        // { id: 46, name: ' 2427 Bullnose Hips & Flashings' },
        // { id: 47, name: '2427 Bullnose Hips & Flashings' },
        // { id: 48, name: ' 2427 Bullnose Hips & Flashings' },
        // { id: 49, name: '4053 Traffix Devices Inc' },
        // { id: 50, name: '2571 RhinoPlay' },
        // { id: 51, name: '2571 RhinoPlay' },
        // { id: 52, name: ' 2484 Harrop Engineering' },
        // { id: 53, name: '2437 Containit Solutions' },
        // { id: 54, name: '2503 Jenway Industries Pty Ltd' },
        // { id: 55, name: '2558 PFG Group Pty Ltd' },
        // { id: 56, name: '2503 Jenway Industries Pty Ltd' },
        // { id: 57, name: '2503 Jenway Industries Pty Ltd' },
        // { id: 58, name: '2427 Bullnose Hips & Flashings' },
        // { id: 59, name: '4053 Traffix Devices Inc' },
        // { id: 60, name: '2571 RhinoPlay' },
        // { id: 61, name: '2481 Green Loo Pty Ltd' },
        // { id: 62, name: '2481 Green Loo Pty Ltd' },
        // { id: 63, name: '2481 Green Loo Pty Ltd' },
        // { id: 64, name: '2481 Green Loo Pty Ltd' },
        // { id: 65, name: '3249 WRB Nominees Pty Ltd' },
        // { id: 66, name: '2571 RhinoPlay' },
        // { id: 67, name: '4053 Traffix Devices Inc' },
        // { id: 68, name: '3249 WRB Nominees Pty Ltd' },
        // { id: 69, name: '2469 Gippsland Body Builders' },
        // { id: 70, name: '2571 RhinoPlay' },
        // { id: 71, name: '2608 Vacuum Truck Supplies' },
        // { id: 72, name: '2571 RhinoPlay' },
        // { id: 73, name: ' 2571 RhinoPlay' },
        // { id: 74, name: ' 4053 Traffix Devices Inc' },
        // { id: 75, name: '2484 Harrop Engineering' },
        // { id: 76, name: '2571 RhinoPlay' },
        // { id: 77, name: '4040 Macnaught Pty Ltd' },
        // { id: 78, name: '2603 The Jetty Specialist' },
        // { id: 79, name: '2603 The Jetty Specialist' },
        // { id: 80, name: '2603 The Jetty Specialist' },
        // { id: 81, name: '2571 RhinoPlay' },
        // { id: 82, name: '4053 Traffix Devices Inc' },
        // { id: 83, name: '2399 Agilent Technologies Singapore' },
        // { id: 84, name: '2399 Agilent Technologies Singapore' },
        // { id: 85, name: '2399 Agilent Technologies Singapore' },
        // { id: 86, name: '2571 RhinoPlay' },
        // { id: 87, name: '2571 RhinoPlay' },
        // { id: 88, name: '2571 RhinoPlay' },
        // { id: 89, name: '3833 Downer Victoria PPP Maintenance Pty Ltd' },
        // { id: 90, name: '2484 Harrop Engineering' },
        // { id: 91, name: '3249 WRB Nominees Pty Ltd' },
        // { id: 92, name: '3249 WRB Nominees Pty Ltd' },
        // { id: 93, name: '2608 Vacuum Truck Supplies' },
        // { id: 94, name: '2399 Agilent Technologies Singapore' },
        // { id: 95, name: '2571 RhinoPlay' },
        // { id: 96, name: '2399 Agilent Technologies Singapore' },
        // { id: 97, name: '2399 Agilent Technologies Singapore' },
        // { id: 98, name: '2399 Agilent Technologies Singapore' },
        // { id: 99, name: '2399 Agilent Technologies Singapore' },
        // { id: 100, name: '2484 Harrop Engineering' },
        // { id: 101, name: '2571 RhinoPlay' },
        // { id: 102, name: '2571 RhinoPlay' },
        // { id: 103, name: '4040 Macnaught Pty Ltd' },
        // { id: 104, name: '2608 Vacuum Truck Supplies' },
        // { id: 105, name: '2399 Agilent Technologies Singapore' },
        // { id: 106, name: '2399 Agilent Technologies Singapore' },
        // { id: 107, name: ' 2484 Harrop Engineering' },
        // { id: 108, name: '3804 Dainichi Corporation' },
        // { id: 109, name: '2399 Agilent Technologies Singapore' },
        // { id: 110, name: '2399 Agilent Technologies Singapore' },
        // { id: 111, name: '2484 Harrop Engineering' },
        // { id: 112, name: '2399 Agilent Technologies Singapore' },
        // { id: 113, name: '2399 Agilent Technologies Singapore' },
    ];

    events = [
        { resourceId: 1, startDate: '2023-07-23', endDate: '2023-08-23', iconCls: "b-fa b-fa-flag", eventColor: 'pink', name: 'SO15674' },
        { resourceId: 2, startDate: '2023-07-07', endDate: '2023-07-23', iconCls: "b-fa b-fa-flag", eventColor: 'red', name: 'SO7709' },
        { resourceId: 3, startDate: '2023-08-01', endDate: '2023-08-23', iconCls: "b-fa b-fa-flag", eventColor: 'green', name: 'SO15715' },
        { resourceId: 4, startDate: '2023-09-23', endDate: '2023-10-25', eventColor: 'orange', name: 'SO15826' },
        { resourceId: 5, startDate: '2023-07-16', endDate: '2024-10-01', eventColor: 'red', name: 'SO15826' },
        // { resourceId: 11, startDate: '5/5/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 12, startDate: '5/5/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 13, startDate: '28/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 14, startDate: '31/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 15, startDate: '1/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 16, startDate: ' 11/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 17, startDate: '23/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 18, startDate: '27/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 19, startDate: '27/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 20, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 21, startDate: '6/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 22, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 23, startDate: '18/5/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 24, startDate: '31/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 25, startDate: '17/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 26, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 27, startDate: '7/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 28, startDate: '30/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 29, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 30, startDate: '5/7/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 31, startDate: '18/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 32, startDate: '7/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 33, startDate: '30/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 34, startDate: '7/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 35, startDate: '21/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 36, startDate: '25/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 37, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 38, startDate: '17/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 39, startDate: '23/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 40, startDate: '29/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 41, startDate: '31/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 42, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 43, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 44, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 45, startDate: '21/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 46, startDate: '24/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 47, startDate: '24/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 48, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 49, startDate: '23/5/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 50, startDate: '26/5/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 51, startDate: '10/7/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 52, startDate: '15/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 53, startDate: '15/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 54, startDate: '21/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 55, startDate: '21/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 56, startDate: '8/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 57, startDate: '8/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 58, startDate: '1/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 59, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 60, startDate: '21/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 61, startDate: '18/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 62, startDate: '18/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 63, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 64, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 65, startDate: '10/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 66, startDate: '16/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 67, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 68, startDate: '11/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 69, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 70, startDate: '6/6/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 71, startDate: '17/7/23', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 72, startDate: '22/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 73, startDate: '25/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 74, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 75, startDate: '10/7/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 76, startDate: '17/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 77, startDate: '23/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 78, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 79, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 80, startDate: '5/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 81, startDate: '26/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 82, startDate: '20/3/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 83, startDate: '18/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 84, startDate: '4/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 85, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 86, startDate: '21/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 87, startDate: '21/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 88, startDate: '24/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 89, startDate: '27/2/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 90, startDate: '16/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 91, startDate: '10/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 92, startDate: '11/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 93, startDate: '17/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 94, startDate: '9/1/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 95, startDate: '25/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 96, startDate: '15/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 97, startDate: '18/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 98, startDate: '4/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 99, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 100, startDate: ' 16/8/23', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 101, startDate: '24/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 102, startDate: '23/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 103, startDate: '5/6/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 104, startDate: '17/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 105, startDate: '4/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 106, startDate: '4/9/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 107, startDate: '16/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 108, startDate: '25/2/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 109, startDate: '4/8/2023 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 110, startDate: ' 4/9/2023', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 111, startDate: '16/8/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 112, startDate: '15/6/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
        // { resourceId: 113, startDate: '18/7/23 ', endDate: '  ', documentNumber:   , referenceNumber:   , Status:   , Memo:   , aggregateAmount:  , Client ETA(First):   },
    ];

    schedulerConfig = schedulerConfig;

    @ViewChild('scheduler') schedulerComponent!: BryntumSchedulerComponent;

    columnsConfig = [
        {
            field: 'name',
            text: 'Customer'
        }
    ];

    viewPresetConfig = {
        base: 'monthAndYear',

        // Customize the header
        headers: [
            // Month names on the top level
            {
                unit: 'month',
                dateFormat: 'MMM'
            }
        ]
    };

}
