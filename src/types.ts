import React from 'react';

export type TableCellType = {
  key: string;
  title: string;
  type?: string;
  hidden?: boolean;
  onPress: (value: string) => void;
  params: string;
};

type TablePaginationType = {
  total: number;
  page: number;
  limit: number;
  offset?: number;
};

export interface ITablePagination extends TablePaginationType {
  onNextPageChange: () => void;
  onPrevPageChange: () => void;
  onPageChange: (pageNumber: number) => void;
}

export interface ITableContent {
  dataSource: [];
  columns: TableCellType[];
  loading?: boolean;
}

export interface ITablePrpps {
  dataSource: [];
  columns: TableCellType[];
  loading?: boolean;
  EmptyStateProps?: EmptyStatePropsType;
  totalRecords: number;
  showPagination?: boolean;
  pagination: TablePaginationType;
  onNextPageChange: () => void;
  onPrevPageChange: () => void;
  onPageChange: (pageNumber: number) => void;
}

type EmptyStatePropsType = {
  action?: React.ReactNode;
  title?: string;
  description?: string;
};

export type IDriverItemType = {
  familyName: string;
  givenName: string;
  permanentNumber: number;
  nationality: string;
  dateOfBirth: string;
  driverId: string | number;
};
