import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'Surfing',
      url: 'https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Coast',
      url: 'https://plus.unsplash.com/premium_photo-1674667007034-abfeeba4127b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Lacanau',
      url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Adventure',
      url: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Landscape',
      url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Horizon',
      url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Atlantic Ocean',
      url: 'https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Surfing',
      url: 'https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Coast',
      url: 'https://plus.unsplash.com/premium_photo-1674667007034-abfeeba4127b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Lacanau',
      url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Adventure',
      url: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Landscape',
      url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Horizon',
      url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Atlantic Ocean',
      url: 'https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Surfing',
      url: 'https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Coast',
      url: 'https://plus.unsplash.com/premium_photo-1674667007034-abfeeba4127b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Lacanau',
      url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Adventure',
      url: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Landscape',
      url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Horizon',
      url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Atlantic Ocean',
      url: 'https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Surfing',
      url: 'https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Coast',
      url: 'https://plus.unsplash.com/premium_photo-1674667007034-abfeeba4127b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Lacanau',
      url: 'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Adventure',
      url: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Landscape',
      url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Horizon',
      url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'Atlantic Ocean',
      url: 'https://plus.unsplash.com/premium_photo-1669748158379-b1460474807c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
  ];

  pageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 4;
  } //absolute value kullanımı bir negatif sayının absolute degeri aynı sayının poziti degeridir.

  previousPageDisabled() {
    return this.currentPage === 0;
  }

  onPreviousPageClick() {
    if (!this.previousPageDisabled()) {
      this.currentPage = this.currentPage - 1;
    }
  }
  nextPageDisabled() {
    return this.currentPage === this.images.length - 2;
  }

  onNextPageClick(event: Event) {
    if (!this.nextPageDisabled()) {
      this.currentPage = this.currentPage + 1;
    }
    event.preventDefault(); // Tıklamayı engelle
  }
}

// changePage(number: number) {
//   this.currentPage = number;
// }   sayfa geçişleri için uzun yöntem
