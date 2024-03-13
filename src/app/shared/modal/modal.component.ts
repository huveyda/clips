import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService],
})
export class ModalComponent {
  constructor(public modal: ModalService) {}
  ngOnInit(): void {}
  closeModal() {
    this.modal.toggleModal();
  }
}
