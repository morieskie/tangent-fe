import {Component, EventEmitter, Input, Output} from '@angular/core'
import {SkillModel} from 'src/app/shared/models/skill.model'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input()
  skill!: SkillModel
  formModel = new SkillModel('')
  @Input()
  showLabels = false
  @Input()
  index!: Number;

  @Output()
  removed: EventEmitter<void> = new EventEmitter<void>()

  @Output()
  updated: EventEmitter<{index: Number; data: SkillModel}> = new EventEmitter<{
    index: Number
    data: SkillModel
  }>()

  levels = [
    {
      key: 0,
      label: 0,
    },
    {
      key: 1,
      label: 1,
    },
    {
      key: 2,
      label: 2,
    },
    {
      key: 3,
      label: 3,
    },
    {
      key: 4,
      label: 4,
    },
    {
      key: 5,
      label: 5,
    },
  ]

  ngOnInit() {
    Object.assign(this.formModel, this.skill)
  }

  onRemove() {
    this.removed.emit()
  }

  onUpdated(index: Number) {
    this.updated.emit({
      index,
      data: this.formModel,
    })
  }
}
