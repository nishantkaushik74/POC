import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component {
  ngOnInit(): void {
    this.embedSupersetDashboard();
  }
  constructor(private elementRef: ElementRef,
    private embedService: SupabaseService,
    private router: Router) { }
  embedSupersetDashboard(): void {
    debugger;
    const dashboardElement = this.elementRef.nativeElement.querySelector('#dashboard');

    if (dashboardElement) {
      this.embedService.embedDashboard().subscribe(
        () => {
          // Adjust the size of the embedded iframe
          const iframe = dashboardElement.querySelector('iframe');
          if (iframe) {
            iframe.style.width = '100%'; // Set the width as needed
            iframe.style.height = '1000px'; // Set the height as needed
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  navigateToComponent1() {
    this.router.navigate(['/schedular']);
  }
}
