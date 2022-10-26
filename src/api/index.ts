export interface BaseRecord {
  id: string;
}

export interface API<T extends BaseRecord> {
  list: () => Promise<T[] | undefined>;
  get: (id: T["id"]) => Promise<T>;
}

export const handleError = async (error: Error) => {
  return Promise.reject(error);
};
