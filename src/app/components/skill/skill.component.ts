import {Component, EventEmitter, Input, Output} from '@angular/core'
import {SkillModel} from 'src/app/shared/models/skill.model'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input()
  skill: SkillModel = new SkillModel('')
  formModel = new SkillModel('')
  @Input()
  showLabels = false
  @Input()
  index!: number;

  @Output()
  removed: EventEmitter<void> = new EventEmitter<void>()

  @Output()
  updated: EventEmitter<{index: number; data: SkillModel}> = new EventEmitter<{
    index: number
    data: SkillModel
  }>()

  levels = [
    {
      key: 1,
      label: "Novice",
    },
    {
      key: 2,
      label: "Beginner",
    },
    {
      key: 3,
      label: "Competent",
    },
    {
      key: 4,
      label: "Proficient",
    },
    {
      key: 5,
      label: "Expert",
    },
  ]

  ngOnInit() {
    Object.assign(this.formModel, this.skill)
  }

  onRemove() {
    this.removed.emit()
  }

  onUpdated(index: number) {
    this.updated.emit({
      index,
      data: this.formModel,
    })
  }
}
