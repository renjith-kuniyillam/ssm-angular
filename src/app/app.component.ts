import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import { RouterModule } from '@angular/router';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface NavItem {
  name: string;
  children?: NavItem[];
}

const TREE_DATA: NavItem[] = [
  {
    name: 'Dashboard',
    children: [{name: 'Security Situations'}],
  },
  {
    name: 'Security Situations',
    children: [{name: 'Security Statistics'}, {name: 'Security Incidents'}],
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatButtonModule, MatTreeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navigationList: NavItem[] = TREE_DATA;
  childrenAccessor = (node: NavItem) => node.children ?? [];
  hasChild = (_: number, node: NavItem) => !!node.children && node.children.length > 0;

  title = 'ssm-ui';
}
