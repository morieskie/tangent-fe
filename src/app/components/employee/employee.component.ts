import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotDirective } from 'src/app/shared/directives/slot.directive';
import { EmployeeModel } from 'src/app/shared/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, OnChanges {

  @ViewChild(SlotDirective, {static: true}) appSlot!: SlotDirective
  
  items: EmployeeModel[] = [];
  total = '0';
  query: string | null = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EmployeeService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    const query = this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('query');
      const filters: any = this.getFilters();
      this.service.getCollection(filters).subscribe(({ data, total }) => {
        this.items = data;
        this.total = total;
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.query);
  }

  onSearch() {
    const filters: any = this.getFilters();

    this.router.navigate(['/employees'], { queryParams: filters });
  }

  getFilters = () => {
    let filters: any = {};
    if (this.query) {
      filters['query'] = this.query;
    }
    return filters;
  };

  onAdd() {
    this.appSlot.viewContainerRef.clear();
    
      const component = this.appSlot.viewContainerRef.createComponent<any>(EmployeeFormComponent)
      component.instance.display = 'block';
      this.modalService.activate()
      this.modalService.observe().subscribe((res) => {
        if (!res) {
          component.destroy()
          this.appSlot.viewContainerRef.clear();
        }
      })
  }
}
